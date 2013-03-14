Ext.define('Обработки.ПечатьПрайсЛиста.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:624px;height:326px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка прайс-листа',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:606px;height:284px;',
			height: 284,width: 606,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:80px;top:6px;width:377px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:6px;width:70px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Валюта:',
			style: 'position:absolute;left:249px;top:50px;width:43px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:297px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отсутствующие на складах предприятия',
			style: 'position:absolute;left:6px;top:115px;width:224px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По которым не заданы цены',
			style: 'position:absolute;left:6px;top:92px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаНач',
			style: 'position:absolute;left:524px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'На дату:',
			style: 'position:absolute;left:471px;top:6px;width:48px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'В валютах цен',
			style: 'position:absolute;left:6px;top:50px;width:92px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'В выбранной валюте',
			style: 'position:absolute;left:119px;top:50px;width:124px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:180px;width:205px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Цены которых не изменились с:',
			style: 'position:absolute;left:6px;top:138px;width:182px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаЦеныНеИзменились',
			style: 'position:absolute;left:193px;top:138px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:598px;height:234px;',
			height: 234,width: 598,
			columns:
			[
				{
					text:'Группировки строк',
					width:'196',
				},
				{
					text:'Тип',
					width:'87',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:598px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:598px;height:234px;',
			height: 234,width: 598,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'60',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:598px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:592px;height:234px;',
			height: 234,width: 592,
			columns:
			[
				{
					text:'Поле',
					width:'237',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:592px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Сортировка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:592px;height:234px;',
			height: 234,width: 592,
			columns:
			[
				{
					text:'Поле',
					width:'393',
				},
				{
					text:'Направление сортировки',
					width:'173',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:592px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Печать',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:592px;height:210px;',
			height: 210,width: 592,
			columns:
			[
				{
					text:'Поле',
					width:'198',
				},
				{
					text:'Представление поля',
					width:'111',
				},
				{
					text:'Печать',
					width:'41',
				},
				{
					text:'Положение',
					width:'211',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:592px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать иерархию групп',
			style: 'position:absolute;left:6px;top:239px;width:175px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать в отчете строку отбора',
			style: 'position:absolute;left:194px;top:239px;width:200px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:300px;width:624px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});