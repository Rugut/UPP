Ext.define('Обработки.КалендарныйПланЗакупок.ФормаНастройкиСоответствийЗаказовПокупателейИПоставщиков',
	{
	extend: 'Ext.window.Window',
	height: 430,width: 780,
	iconCls: 'bogus',
	title: 'Помощник настройки соответствий заказов покупателей и заказов поставщикам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:405px;width:780px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Отмена',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:151px;top:33px;width:621px;height:364px;',
			height: 364,width: 621,
			columns:
			[
				{
					text:'ОсновныеДанные',
				},
				{
					text:'Контрагент',
				},
				{
					text:'КоличествоПотребности',
				},
				{
					text:'КоличествоЗаказов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:151px;top:9px;width:270px;height:24px;',
			items:
			[
				{
					text:'Изменить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ИсторияОтборов',
				},
				{
					text:'ОтборПоТекущемуЗначению',
				},
				{
					text:'НастройкаОтбора',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Автокорректировка',
				},
				{
					text:'ОтключитьОтбор',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:9px;width:138px;height:388px;',
			height: 388,width: 138,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});