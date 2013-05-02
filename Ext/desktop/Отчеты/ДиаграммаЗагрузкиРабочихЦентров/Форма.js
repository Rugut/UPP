Ext.define('Отчеты.ДиаграммаЗагрузкиРабочихЦентров.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:618px;height:460px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Диаграмма загрузки рабочих центров',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:618px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
				},
					]
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:188px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:328px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:602px;height:392px;',
			height: 392,width: 602,
			items:
			[
				{
					title:'Диаграмма',
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:588px;height:342px;',
			height: 342,width: 588,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'120',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'80',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'240',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'120',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'120',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДиаграммаЗагрузкиРабочихЦентров/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:588px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:66px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:206px;top:33px;width:120px;height:19px;',
		},
	]
});