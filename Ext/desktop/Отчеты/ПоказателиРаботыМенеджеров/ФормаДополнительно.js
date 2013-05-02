Ext.define('Отчеты.ПоказателиРаботыМенеджеров.ФормаДополнительно',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:486px;height:371px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:346px;width:486px;height:25px;',
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
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Отчет за период с:',
			style: 'position:absolute;left:8px;top:6px;width:102px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:113px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:196px;top:6px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонца',
			style: 'position:absolute;left:214px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:117px;width:470px;height:221px;',
			height: 221,width: 470,
			columns:
			[
				{
					text:'Использование показателя',
					width:'21',
					dataIndex:'ИспользованиеПоказателя',
					flex:1,
				},
				{
					text:'Показатель',
					width:'469',
					dataIndex:'ПредставлениеПоказателя',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоказателиРаботыМенеджеров/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ИспользованиеПоказателя',
					},
					{
						name:'ПредставлениеПоказателя',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:93px;width:470px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Менеджер:',
			style: 'position:absolute;left:14px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиМенеджер',
			style: 'position:absolute;left:258px;top:50px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:296px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:96px;top:50px;width:160px;height:19px;',
		},
	]
});