Ext.define('Обработки.ПолучениеПочты.ФормаПисьма',
	{
	extend: 'Ext.window.Window',
	height: 443,width: 496,
	iconCls: 'bogus',
	title: 'Содержание письма',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекстТемы',
			style: 'position:absolute;left:50px;top:60px;width:438px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекстПисьма',
			style: 'position:absolute;left:8px;top:84px;width:480px;height:180px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:310px;width:480px;height:100px;',
			height: 100,width: 480,
			columns:
			[
				{
					text:'Файл',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресОтправителя',
			style: 'position:absolute;left:118px;top:8px;width:370px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отправитель',
			style: 'position:absolute;left:118px;top:32px;width:370px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:286px;width:480px;height:24px;',
			items:
			[
				{
					text:'ОткрытьФайлы',
				},
				{
					text:'Подменю',
				},
				{
					text:'СохранитьНаДиске',
				},
				{
					text:'СохранитьНаДиске',
				},
				{
					text:'ОткрытьФайлы',
				},
				{
					text:'Разделитель4',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьКИ',
			text: 'Добавить контактную информацию',
			style: 'position:absolute;left:118px;top:32px;width:200px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:418px;width:496px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});