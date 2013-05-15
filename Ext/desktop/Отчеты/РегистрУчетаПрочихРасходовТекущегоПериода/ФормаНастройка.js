Ext.define('Отчеты.РегистрУчетаПрочихРасходовТекущегоПериода.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:498px;height:278px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистр учета прочих и косвенных расходов (настройка)',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:8px;width:484px;height:238px;',
			height: 238,width: 484,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:32px;width:266px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:32px;width:76px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНач',
			style: 'position:absolute;left:84px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаКон',
			style: 'position:absolute;left:184px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'по:',
			style: 'position:absolute;left:166px;top:6px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:266px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:6px;top:6px;width:446px;height:206px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Прочие расходы, связанные с производством и (или) реализацией (ст. 264 НК РФ)',
			style: 'position:absolute;left:14px;top:73px;width:462px;height:32px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Косвенные расходы',
			style: 'position:absolute;left:14px;top:106px;width:336px;height:16px;',
		},
			]
		},
					]
				},
				{
					title:'Виды расходов',
					items:
					[
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:253px;width:498px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
			]
		},
	]
});