Ext.define('Обработки.ПерерасчетЗарплатыОрганизаций.СписокРаботников',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:277px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор по сотрудникам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:261px;height:251px;',
			height: 251,width: 261,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Сотрудник',
					width:'183',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:277px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
});