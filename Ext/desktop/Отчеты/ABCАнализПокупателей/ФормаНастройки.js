Ext.define('Отчеты.ABCАнализПокупателей.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:486px;height:332px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка ABC-анализ покупателей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:307px;width:486px;height:25px;',
			items:
			[
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:470px;height:291px;',
			height: 291,width: 470,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата отчета:',
			style: 'position:absolute;left:6px;top:6px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОтчета',
			style: 'position:absolute;left:77px;top:6px;width:93px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:30px;width:207px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать группировки',
			style: 'position:absolute;left:6px;top:50px;width:165px;height:15px;',
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:456px;height:241px;',
			height: 241,width: 456,
			columns:
			[
				{
					text:'Поле',
					width:'266',
				},
				{
					text:'Тип',
					width:'170',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:456px;height:24px;',
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
			style: 'position:absolute;left:6px;top:24px;width:456px;height:241px;',
			height: 241,width: 456,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'158',
				},
				{
					text:'Тип сравнения',
					width:'112',
				},
				{
					text:'Значение',
					width:'81',
				},
				{
					text:'С',
					width:'81',
				},
				{
					text:'По',
					width:'81',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:456px;height:24px;',
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
			style: 'position:absolute;left:6px;top:24px;width:456px;height:241px;',
			height: 241,width: 456,
			columns:
			[
				{
					text:'Поле',
					width:'290',
				},
				{
					text:'Направление сортировки',
					width:'138',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:456px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
	]
});