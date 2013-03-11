Ext.define('Документы.УстановкаДиапазоновБазовыхЦен.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 610,
	iconCls: 'bogus',
	title: 'Установка диапазонов базовых цен',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:594px;height:259px;',
			height: 259,width: 594,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'ТипЦен',
				},
				{
					text:'Ответственный',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:610px;height:25px;',
			items:
			[
			]
		},
	]
});