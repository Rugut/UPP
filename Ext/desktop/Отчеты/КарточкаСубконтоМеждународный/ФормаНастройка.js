Ext.define('Отчеты.КарточкаСубконтоМеждународный.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:364px;height:309px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка: Карточка субконто',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:284px;width:364px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:8px;width:350px;height:268px;',
			height: 268,width: 350,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаДатаНач',
			style: 'position:absolute;left:124px;top:6px;width:86px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаДатаКон',
			style: 'position:absolute;left:234px;top:6px;width:86px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:322px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:124px;top:30px;width:218px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:124px;top:54px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Все периоды',
			style: 'position:absolute;left:251px;top:54px;width:91px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:128px;width:336px;height:114px;',
			height: 114,width: 336,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид субконто',
					width:'288',
					dataIndex:'ВидСубконто',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КарточкаСубконтоМеждународный/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидСубконто',
					},
				]
			},
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:336px;height:210px;',
			height: 210,width: 336,
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
					width:'94',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'43',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'65',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'65',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'65',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КарточкаСубконтоМеждународный/ВыбратьПоСсылке/100'},
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
					]
				},
			]
		},
	],
	dockedItems:
	[
	]
});