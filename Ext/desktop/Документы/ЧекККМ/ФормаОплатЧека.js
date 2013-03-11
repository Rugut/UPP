Ext.define('Документы.ЧекККМ.ФормаОплатЧека',
	{
	extend: 'Ext.window.Window',
	height: 228,width: 480,
	iconCls: 'bogus',
	title: 'Оплата чека',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:203px;width:480px;height:25px;',
			items:
			[
				{
					text:'ОплатитьКартой',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОк',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ДействиеОтмена',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОплаты',
			style: 'position:absolute;left:143px;top:33px;width:237px;height:22px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:362px;top:7px;width:110px;height:22px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаОплаты',
			style: 'position:absolute;left:143px;top:175px;width:110px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОплатаБезСдачи',
			text: '',
			style: 'position:absolute;left:121px;top:175px;width:20px;height:22px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сдача',
			style: 'position:absolute;left:362px;top:175px;width:110px;height:22px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:59px;width:464px;height:116px;',
			height: 116,width: 464,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});