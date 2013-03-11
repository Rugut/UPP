Ext.define('Отчеты.ЖурналУчетаСчетовФактур1137.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	height: 516,width: 815,
	iconCls: 'bogus',
	title: 'Журнал учета полученных и выставленных счетов-фактур по Постановлению № 1137',
	
	items:
	[
		{
			xtype: 'button',
			name: 'КнопкаКварталНазад',
			text: '',
			style: 'position:absolute;left:8px;top:28px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаКварталВперед',
			text: '',
			style: 'position:absolute;left:149px;top:28px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:258px;top:28px;width:228px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:815px;height:24px;',
			items:
			[
				{
					text:'Справка',
				},
				{
					text:'Настройка',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'СохранитьЗначения',
				},
			]
		},
	]
});