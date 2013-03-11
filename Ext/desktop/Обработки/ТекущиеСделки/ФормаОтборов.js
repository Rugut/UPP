Ext.define('Обработки.ТекущиеСделки.ФормаОтборов',
	{
	extend: 'Ext.window.Window',
	height: 260,width: 478,
	iconCls: 'bogus',
	title: 'Отбор',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:235px;width:478px;height:25px;',
			items:
			[
				{
					text:'Отмена',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:462px;height:219px;',
			height: 219,width: 462,
			items:
			[
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияКонтрагент',
			style: 'position:absolute;left:111px;top:30px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораКонтрагент',
			style: 'position:absolute;left:234px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияПользователь',
			style: 'position:absolute;left:111px;top:54px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораПользователь',
			style: 'position:absolute;left:234px;top:54px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияСумма',
			style: 'position:absolute;left:111px;top:78px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораСумма',
			style: 'position:absolute;left:234px;top:78px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияТипДокумента',
			style: 'position:absolute;left:111px;top:102px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораТипДокумента',
			style: 'position:absolute;left:234px;top:102px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияДоговор',
			style: 'position:absolute;left:111px;top:126px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияНомер',
			style: 'position:absolute;left:111px;top:150px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораНомер',
			style: 'position:absolute;left:234px;top:150px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияВидОперации',
			style: 'position:absolute;left:111px;top:174px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораВидОперации',
			style: 'position:absolute;left:234px;top:174px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияДата',
			style: 'position:absolute;left:111px;top:6px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораДата',
			style: 'position:absolute;left:234px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораДатаНач',
			style: 'position:absolute;left:234px;top:6px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораДатаКон',
			style: 'position:absolute;left:348px;top:6px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораДоговор',
			style: 'position:absolute;left:234px;top:126px;width:220px;height:19px;',
		},
					]
				},
			]
		},
	]
});