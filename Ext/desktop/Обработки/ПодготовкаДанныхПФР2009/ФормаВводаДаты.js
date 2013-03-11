Ext.define('Обработки.ПодготовкаДанныхПФР2009.ФормаВводаДаты',
	{
	extend: 'Ext.window.Window',
	height: 293,width: 359,
	iconCls: 'bogus',
	title: 'Окончание межрасчетного периода',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияМежрасчетногоПериода',
			style: 'position:absolute;left:271px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:269px;width:359px;height:24px;',
			items:
			[
				{
					text:'Отмена',
				},
				{
					text:'Ок',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:83px;width:343px;height:178px;',
			height: 178,width: 343,
			columns:
			[
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:59px;width:343px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Подбор',
				},
			]
		},
	]
});