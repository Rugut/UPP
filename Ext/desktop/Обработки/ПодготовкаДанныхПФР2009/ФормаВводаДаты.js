Ext.define('Обработки.ПодготовкаДанныхПФР2009.ФормаВводаДаты',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:359px;height:293px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Окончание межрасчетного периода',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Укажите дату окончания межрасчетного периода',
			style: 'position:absolute;left:8px;top:8px;width:258px;height:19px;',
		},
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
					text:'ОК',
				},
				{
					text:'Закрыть',
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
					width:'0',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Выберите сотрудников, выходящих на пенсию',
			style: 'position:absolute;left:8px;top:38px;width:258px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:59px;width:343px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
			]
		},
	]
});