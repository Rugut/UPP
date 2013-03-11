Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ВидыОтправляемыхДокументов_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 390,width: 802,
	iconCls: 'bogus',
	title: 'Виды отправляемых документов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:200px;top:33px;width:594px;height:280px;',
			height: 280,width: 594,
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
					text:'ТипПолучателя',
				},
				{
					text:'ТипДокумента',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:186px;height:280px;',
			height: 280,width: 186,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:802px;height:25px;',
			items:
			[
				{
					text:'Добавить',
				},
				{
					text:'НайтиВдереве',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие4',
				},
				{
					text:'ВосстановитьПредопределенные',
				},
				{
					text:'ПереместитьВгруппу',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ИерархическийПросмотр',
				},
				{
					text:'Изменить',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Удалить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'НоваяГруппа',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель4',
				},
			]
		},
	]
});