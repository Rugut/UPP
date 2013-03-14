Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РезультатОнлайнПроверки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:863px;height:656px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Результат проверки отчета ',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:631px;width:863px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:28px;width:847px;height:200px;',
			height: 200,width: 847,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ПредставлениеТекст',
			style: 'position:absolute;left:0px;top:0px;width:847px;height:200px;',
		},
					]
				},
				{
					title:'',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:234px;width:847px;height:389px;',
			height: 389,width: 847,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница TXT',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Протокол',
			style: 'position:absolute;left:0px;top:20px;width:847px;height:369px;',
		},
					]
				},
				{
					title:'Страница HTML',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСохранить1',
			text: 'Выгрузить',
			style: 'position:absolute;left:791px;top:1px;width:56px;height:15px;text-align:right;',
		},
					]
				},
			]
		},
	]
});