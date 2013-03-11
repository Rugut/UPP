Ext.define('Документы.НачислениеПоБольничномуЛисту.ФормаЛьготныхДанных',
	{
	extend: 'Ext.window.Window',
	height: 139,width: 596,
	iconCls: 'bogus',
	title: 'Начисление по больничному листу',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:114px;width:596px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
				{
					text:'ДействиеОК',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:580px;height:98px;',
			height: 98,width: 580,
			items:
			[
				{
					title:'СтраницаОтставников',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОплатыБезЛьгот1',
			style: 'position:absolute;left:229px;top:48px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничениеПособияБезЛьгот1',
			style: 'position:absolute;left:229px;top:73px;width:351px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтажЛет',
			style: 'position:absolute;left:229px;top:23px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтажМесяцев',
			style: 'position:absolute;left:317px;top:23px;width:57px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаОблученных',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОплаты3',
			style: 'position:absolute;left:217px;top:23px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничениеПособия',
			style: 'position:absolute;left:217px;top:48px;width:172px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОплатыБезЛьгот2',
			style: 'position:absolute;left:408px;top:23px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничениеПособияБезЛьгот2',
			style: 'position:absolute;left:408px;top:48px;width:172px;height:19px;',
		},
					]
				},
			]
		},
	]
});