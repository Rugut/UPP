Ext.define('Обработки.ФормированиеПоказателейСхемМотивации.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:402px;height:320px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Формирование показателей',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Период:',
			style: 'position:absolute;left:8px;top:33px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:116px;width:388px;height:24px;',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Показатели',
			style: 'position:absolute;left:8px;top:100px;width:388px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Отбор',
			style: 'position:absolute;left:8px;top:56px;width:388px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:140px;width:388px;height:147px;',
			height: 147,width: 388,
			columns:
			[
				{
					text:'Использование показателя',
					width:'25',
					dataIndex:'ИспользованиеПоказателя',
					flex:1,
				},
				{
					text:'Представление показателя',
					width:'175',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеПоказателейСхемМотивации/ВыбратьПоСсылке/100'},
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
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МесяцСтрока',
			style: 'position:absolute;left:91px;top:33px;width:160px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Менеджер:',
			style: 'position:absolute;left:8px;top:74px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиМенеджер',
			style: 'position:absolute;left:190px;top:74px;width:206px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:91px;top:74px;width:92px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:402px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Восстановить значения',
				},
				{
					text:'Сохранить значения',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:295px;width:402px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сформировать показатели',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});