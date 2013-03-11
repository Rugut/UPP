Ext.define('Отчеты.РегистрУчетаПрямыхРасходовНаПроизводство.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 353,width: 372,
	iconCls: 'bogus',
	title: 'Регистр учета прямых расходов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:328px;width:372px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:8px;width:358px;height:312px;',
			height: 312,width: 358,
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
			style: 'position:absolute;left:84px;top:30px;width:266px;height:19px;',
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
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:125px;width:344px;height:161px;',
			height: 161,width: 344,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Представление',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:101px;width:344px;height:24px;',
			items:
			[
				{
					text:'СнятьВсе',
				},
				{
					text:'Действие2',
				},
				{
					text:'УстановитьВсе',
				},
				{
					text:'Действие3',
				},
			]
		},
					]
				},
				{
					title:'ВидыРасходов',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:326px;top:6px;width:24px;height:280px;',
			items:
			[
				{
					text:'УстановтьВсеВиды',
				},
				{
					text:'СнятьВсеВиды',
				},
			]
		},
					]
				},
			]
		},
	]
});