Ext.define('Документы.СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 413,width: 583,
	iconCls: 'bogus',
	title: 'Сведения о трудовом стаже застрахованного лица (СЗВ-К)',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:361px;width:479px;height:19px;',
		},
	]
});