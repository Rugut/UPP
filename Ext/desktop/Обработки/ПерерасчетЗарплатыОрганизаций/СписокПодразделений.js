Ext.define('Обработки.ПерерасчетЗарплатыОрганизаций.СписокПодразделений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:277px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор по подразделениям',
	
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
					text:'Подразделение',
					width:'168',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:277px;height:25px;',
			items:
			[
				'-',
				{
					text:'Отмена',
				},
				{
					text:'OK',
				},
			]
		},
	]
});