Ext.define('Документы.УстановкаДиапазоновБазовыхЦен.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:605px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка диапазонов базовых цен',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:589px;height:259px;',
			height: 259,width: 589,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Дата',
					width:'100',
				},
				{
					text:'Номер',
					width:'130',
				},
				{
					text:'Тип цен',
					width:'182',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:605px;height:25px;',
			items:
			[
				'-',
				{
					text:'Выбрать',
				},
			]
		},
	]
});