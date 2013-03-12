Ext.define('Отчеты.ПроверкаДостаточностиКлючевыхРесурсов.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:349px;height:162px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет  Проверка достаточности ключевых ресурсов',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Вид планирования:',
			style: 'position:absolute;left:8px;top:60px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПланирования',
			style: 'position:absolute;left:116px;top:60px;width:225px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Сценарий плана:',
			style: 'position:absolute;left:8px;top:85px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СценарийПлана',
			style: 'position:absolute;left:116px;top:85px;width:225px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:349px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:137px;width:349px;height:25px;',
			items:
			[
				'-',
				{
					text:'Сформировать',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:116px;top:33px;width:87px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'по:',
			style: 'position:absolute;left:208px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:229px;top:33px;width:87px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:321px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Сценарий ресурсов:',
			style: 'position:absolute;left:8px;top:110px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СценарийРесурсов',
			style: 'position:absolute;left:116px;top:110px;width:225px;height:19px;',
		},
	]
});