Ext.define('Обработки.ПолучениеПочты.ФормаПисьма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:496px;height:443px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
			xtype: 'textarea',
			hideLabel: true,
			name: 'ТекстПисьма',
			style: 'position:absolute;left:8px;top:84px;width:480px;height:180px;',
		},
		{
			xtype: 'label',
			name: 'ПодписьТема',
			text: 'Тема:',
			style: 'position:absolute;left:8px;top:60px;width:40px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:310px;width:480px;height:100px;',
			height: 100,width: 480,
			columns:
			[
				{
					text:'Файл',
					width:'527',
				},
			]
		},
		{
			xtype: 'label',
			name: 'ПодписьАдресОтправителя',
			text: 'Адрес отправителя:',
			style: 'position:absolute;left:8px;top:8px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресОтправителя',
			style: 'position:absolute;left:118px;top:8px;width:370px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПодписьОтправитель',
			text: 'Отправитель:',
			style: 'position:absolute;left:8px;top:32px;width:108px;height:19px;',
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
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Открыть',
				},
				{
					text:'Сохранить на диске',
				},
					]
				},
				'-',
				{
					text:'Открыть',
				},
				{
					text:'Сохранить на диске',
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
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});