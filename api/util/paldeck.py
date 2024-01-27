import pandas as pd

class paldeck:
    df = None

    def __init__(self):
        self.df = self.get_df_from_csv()
    
    def get_pal_list(self):
        return self.df.columns.to_list()

    def get_df_from_csv(self):
        return pd.read_csv('source.csv', index_col=0)
    
    def get_combi_list(self, target : str):
        rows, cols = (self.df == target).values.nonzero()
        rows = self.df.index[rows].to_list()
        cols = self.df.columns[cols].to_list()
        
        combis = []
        for row, col in zip(rows,cols):
            combis.append({'male':col,'female':row})
        return combis