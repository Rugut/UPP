Ext.define('Обработки.ЗначенияСвойствОбъекта.ЗначенияСвойствОбъекта',
	{
	extend: 'Ext.window.Window',
	height: 346,width: 476,
	iconCls: 'bogus',
	title: 'Свойства',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:476px;height:25px;',
			items:
			[
				{
					text:'ДействиеСправка',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДействиеЗакончитьРедактирование',
				},
				{
					text:'ДействиеУдалить',
				},
				{
					text:'ДействиеЗаписать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеДобавить',
				},
				{
					text:'ДействиеПеречитать',
				},
				{
					text:'ДействиеИзменить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:460px;height:280px;',
			height: 280,width: 460,
			columns:
			[
				{
					text:'ПометкаУдаления',
				},
				{
					text:'Свойство',
				},
				{
					text:'Значение',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:321px;width:476px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
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