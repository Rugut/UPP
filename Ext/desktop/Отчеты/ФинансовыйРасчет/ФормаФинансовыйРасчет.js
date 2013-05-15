Ext.define('Отчеты.ФинансовыйРасчет.ФормаФинансовыйРасчет',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:698px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Сценарий',
			style: 'position:absolute;left:66px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сценарий:',
			style: 'position:absolute;left:8px;top:58px;width:56px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидФинансовогоРасчета',
			style: 'position:absolute;left:66px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Расчет:',
			style: 'position:absolute;left:8px;top:82px;width:56px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:470px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказатель',
			text: 'Показатель для вывода:',
			style: 'position:absolute;left:320px;top:58px;width:148px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНач',
			style: 'position:absolute;left:66px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:164px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаКон',
			style: 'position:absolute;left:182px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:280px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:470px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись38',
			text: 'Развернуть по горизонтали:',
			style: 'position:absolute;left:320px;top:82px;width:148px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:698px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Сформировать',
				},
				{
					text:'Настройка...',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
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
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Восстановить значения',
				},
				{
					text:'Сохранить значения...',
				},
				{
					text:'Справка',
				},
			]
		},
	]
});