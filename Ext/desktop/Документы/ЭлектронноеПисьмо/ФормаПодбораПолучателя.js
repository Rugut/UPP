Ext.define('Документы.ЭлектронноеПисьмо.ФормаПодбораПолучателя',
	{
	extend: 'Ext.window.Window',
	height: 299,width: 448,
	iconCls: 'bogus',
	title: 'Проверка и выбор получателей/отправителей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:274px;width:448px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:104px;width:432px;height:162px;',
			height: 162,width: 432,
			columns:
			[
				{
					text:'Объект',
				},
				{
					text:'АдресЭлектроннойПочты',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:80px;width:432px;height:24px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Добавить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие7',
				},
				{
					text:'ПодобратьИзАдреснойКниги',
				},
			]
		},
	]
});