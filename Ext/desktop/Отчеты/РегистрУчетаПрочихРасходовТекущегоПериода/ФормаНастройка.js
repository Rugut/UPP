Ext.define('Отчеты.РегистрУчетаПрочихРасходовТекущегоПериода.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 278,width: 498,
	iconCls: 'bogus',
	title: 'Регистр учета прочих и косвенных расходов (настройка)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:253px;width:498px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
			]
		},
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
			name: 'Организация',
			style: 'position:absolute;left:84px;top:32px;width:266px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:84px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:184px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:266px;top:6px;width:20px;height:19px;',
		},
					]
				},
				{
					title:'ВидыРасходов',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:452px;top:6px;width:24px;height:206px;',
			items:
			[
				{
					text:'СнятьВсеВиды',
				},
				{
					text:'УстановитьВсеВиды',
				},
			]
		},
					]
				},
			]
		},
	]
});