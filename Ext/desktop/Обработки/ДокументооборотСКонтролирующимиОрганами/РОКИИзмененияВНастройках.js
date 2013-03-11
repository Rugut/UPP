Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РОКИИзмененияВНастройках',
	{
	extend: 'Ext.window.Window',
	height: 511,width: 618,
	iconCls: 'bogus',
	title: 'Список изменений в настройках, которые необходимо произвести',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:486px;width:618px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПроизвестиАвтоматическуюНастройку',
				},
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:64px;width:602px;height:414px;',
			height: 414,width: 602,
			columns:
			[
				{
					text:'Представление',
				},
				{
					text:'Подробнее',
				},
				{
					text:'СтароеЗначение',
				},
				{
					text:'НовоеЗначение',
				},
				{
					text:'Настройка',
				},
			]
		},
	]
});