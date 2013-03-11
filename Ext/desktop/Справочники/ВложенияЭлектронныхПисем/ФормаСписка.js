Ext.define('Справочники.ВложенияЭлектронныхПисем.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 608,
	iconCls: 'bogus',
	title: 'Вложения электронных писем',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:592px;height:280px;',
			height: 280,width: 592,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
				{
					text:'Объект',
				},
				{
					text:'ИмяФайла',
				},
				{
					text:'ИДФайлаПочтовогоПисьма',
				},
				{
					text:'Предмет',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			items:
			[
			]
		},
	]
});