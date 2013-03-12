Ext.define('Документы.ВводРаспределенияЗаработкаРаботников.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод распределения заработка сотрудников',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:684px;height:280px;',
			height: 280,width: 684,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'134',
				},
				{
					text:'Номер',
					width:'77',
				},
				{
					text:'Месяц',
					width:'84',
				},
				{
					text:'Комментарий',
					width:'100',
				},
				{
					text:'Ответственный',
					width:'110',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				{
					text:'Действия формы выбрать',
				},
				'-',
				{
					text:'Подменю2',
				},
				{
					text:'Действия формы выбрать',
				},
				'-',
			]
		},
	]
});