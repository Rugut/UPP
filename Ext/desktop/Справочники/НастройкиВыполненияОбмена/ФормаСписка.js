Ext.define('Справочники.НастройкиВыполненияОбмена.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 425,width: 715,
	iconCls: 'bogus',
	title: 'Справочник Настройки выполнения обмена',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:699px;height:384px;',
			height: 384,width: 699,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:715px;height:25px;',
			items:
			[
				{
					text:'ПроизвестиОбменданными',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеЧтениеИЗаписьСообщенийСИзменениями',
				},
				{
					text:'Подменю',
				},
				{
					text:'ПараметрыДляОбновленияКонфигурации',
				},
			]
		},
	]
});