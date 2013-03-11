Ext.define('Справочники.ВложенияЭлектронныхПисем.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 504,
	iconCls: 'bogus',
	title: 'Вложения электронных писем',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:488px;height:280px;',
			height: 280,width: 488,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Объект',
				},
				{
					text:'ИмяФайла',
				},
				{
					text:'Наименование',
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
			style: 'position:absolute;left:0px;top:0px;width:504px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});