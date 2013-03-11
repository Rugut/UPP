Ext.define('Обработки.ГрафикЗаказов.ФормаОтображениеИзменений',
	{
	extend: 'Ext.window.Window',
	height: 335,width: 747,
	iconCls: 'bogus',
	title: 'Список изменений',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:310px;width:747px;height:25px;',
			items:
			[
				{
					text:'Сохранить',
				},
				{
					text:'НеСохранять',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:48px;width:731px;height:254px;',
			height: 254,width: 731,
			columns:
			[
				{
					text:'Изменять',
				},
				{
					text:'Заказ',
				},
				{
					text:'ПредставлениеЗаказа',
				},
				{
					text:'ДатыЗапуска',
				},
				{
					text:'ДатаЗапускаИсходная',
				},
				{
					text:'ДатаЗапуска',
				},
				{
					text:'ДатыИсполнения',
				},
				{
					text:'ДатаИсполненияИсходная',
				},
				{
					text:'ДатаИсполнения',
				},
			]
		},
	]
});