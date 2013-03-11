Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаВыбораОтчета',
	{
	extend: 'Ext.window.Window',
	height: 386,width: 700,
	iconCls: 'bogus',
	title: 'Выберите отчет',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:361px;width:700px;height:25px;',
			items:
			[
				{
					text:'Новый',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:9px;width:684px;height:344px;',
			height: 344,width: 684,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'НаименованиеОтчета',
				},
				{
					text:'Организация',
				},
				{
					text:'Период',
				},
				{
					text:'КодИМНС',
				},
				{
					text:'Вид',
				},
				{
					text:'Комментарий',
				},
				{
					text:'ДатаНачала',
				},
				{
					text:'ДатаОкончания',
				},
				{
					text:'Периодичность',
				},
				{
					text:'ИсточникОтчета',
				},
			]
		},
	]
});