Ext.define('Документы.УстановкаДиапазоновБазовыхЦен.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:610px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'20',
				},
				{
					text:'Дата',
					width:'86',
				},
				{
					text:'Номер',
					width:'114',
				},
				{
					text:'Тип цен',
					width:'164',
				},
				{
					text:'Ответственный',
					width:'166',
				},
				{
					text:'Комментарий',
					width:'270',
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