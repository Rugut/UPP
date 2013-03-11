Ext.define('Обработки.АнализНеявок.ФормаДополнительныхДанных',
	{
	extend: 'Ext.window.Window',
	height: 215,width: 610,
	iconCls: 'bogus',
	title: 'Начисление по больничному листу: дополнительные данные',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:190px;width:610px;height:25px;',
			items:
			[
				{
					text:'ДействиеОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:594px;height:174px;',
			height: 174,width: 594,
			items:
			[
				{
					title:'ОбщиеДанные',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачислениеПоБЛ',
			style: 'position:absolute;left:80px;top:78px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНарушенияРежима',
			style: 'position:absolute;left:235px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаНачало',
			style: 'position:absolute;left:117px;top:129px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаОкончание',
			style: 'position:absolute;left:233px;top:129px;width:90px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:330px;top:129px;width:20px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:294px;top:78px;width:281px;height:19px;',
			height: 19,width: 281,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчетаДоплаты',
			style: 'position:absolute;left:75px;top:0px;width:200px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'СтраницаОтставников',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОплатыБезЛьгот1',
			style: 'position:absolute;left:236px;top:59px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничениеПособияБезЛьгот1',
			style: 'position:absolute;left:236px;top:84px;width:350px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтажЛет',
			style: 'position:absolute;left:236px;top:34px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтажМесяцев',
			style: 'position:absolute;left:324px;top:34px;width:57px;height:19px;',
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
			name: 'ПроцентОплаты',
			style: 'position:absolute;left:223px;top:29px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничениеПособия',
			style: 'position:absolute;left:223px;top:54px;width:172px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОплатыБезЛьгот2',
			style: 'position:absolute;left:414px;top:29px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничениеПособияБезЛьгот2',
			style: 'position:absolute;left:414px;top:54px;width:172px;height:19px;',
		},
					]
				},
			]
		},
	]
});