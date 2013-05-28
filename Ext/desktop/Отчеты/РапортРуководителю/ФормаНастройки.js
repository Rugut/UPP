Ext.define('Отчеты.РапортРуководителю.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:448px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка показателей',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:8px;width:434px;height:379px;',
			height: 379,width: 434,
			items:
			[
				{
					title:'Показатели',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:420px;height:244px;',
			height: 244,width: 420,
			columns:
			[
				{
					text:'Показатель',
					width:'257',
					dataIndex:'ПредставлениеПоказателя',
					flex:1,
				},
				{
					text:'Показатель',
					width:'100',
					dataIndex:'Показатель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РапортРуководителю/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПредставлениеПоказателя',
					},
					{
						name:'Показатель',
					},
				]
			},
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаТекДата',
			width: 88,
			height: 19,
			style: 'position:absolute;left:94px;top:26px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Публиковать в файл:',
			style: 'position:absolute;left:12px;top:168px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Текущая дата:',
			style: 'position:absolute;left:12px;top:26px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Вид отчета:',
			style: 'position:absolute;left:243px;top:99px;width:61px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:306px;top:99px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКаталог',
			width: 276,
			height: 19,
			style: 'position:absolute;left:150px;top:168px;width:276px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Публиковать по почте:',
			style: 'position:absolute;left:12px;top:192px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаАдресаЭлПочты',
			width: 276,
			height: 19,
			style: 'position:absolute;left:150px;top:192px;width:276px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автообновление:',
			style: 'position:absolute;left:12px;top:99px;width:108px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаИнтервалАвтообновления',
			style: 'position:absolute;left:122px;top:99px;width:60px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать выходные',
			style: 'position:absolute;left:297px;top:50px;width:129px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Дата формирования',
			style: 'position:absolute;left:6px;top:6px;width:420px;height:16px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:306px;top:26px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Дней до текущей даты:',
			style: 'position:absolute;left:184px;top:26px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Дата формирования:',
			style: 'position:absolute;left:12px;top:50px;width:112px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОтчета',
			text: '',
			style: 'position:absolute;left:126px;top:50px;width:119px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Параметры публикации',
			style: 'position:absolute;left:6px;top:146px;width:420px;height:17px;',
		},
		{
			xtype: 'fieldset',
			title: 'Дополнительно',
			style: 'position:absolute;left:6px;top:77px;width:420px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'минут',
			style: 'position:absolute;left:184px;top:99px;width:36px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Время автопубликаций:',
			style: 'position:absolute;left:12px;top:248px;width:136px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:150px;top:272px;width:276px;height:80px;',
			height: 80,width: 276,
			columns:
			[
				{
					text:'Время',
					width:'100',
					dataIndex:'Время',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РапортРуководителю/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Время',
					},
				]
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать при старте системы',
			style: 'position:absolute;left:12px;top:123px;width:204px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Отправлять с:',
			style: 'position:absolute;left:12px;top:216px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресЭлектроннойПочтыУчетнойЗаписи',
			width: 276,
			height: 19,
			style: 'position:absolute;left:150px;top:216px;width:276px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:395px;width:448px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Справка',
				},
			]
		},
	],
	dockedItems:
	[
	]
});