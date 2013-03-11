Ext.define('Обработки.ДопроведениеДокументов.Форма',
	{
	extend: 'Ext.window.Window',
	height: 291,width: 427,
	iconCls: 'bogus',
	title: 'Допроведение документов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:266px;width:427px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ВыполнитьДопроведение',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НастройкаДопроведенияДокументов',
			style: 'position:absolute;left:74px;top:33px;width:345px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоИнтервалаДопроведения',
			style: 'position:absolute;left:78px;top:126px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонецИнтервалаДопроведения',
			style: 'position:absolute;left:183px;top:126px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:268px;top:126px;width:19px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:427px;height:25px;',
			items:
			[
				{
					text:'Отчеты',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'ДиаграммаОтложенногоПроведения',
				},
			]
		},
	]
});