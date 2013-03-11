Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЦиклыОбмена_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 700,
	iconCls: 'bogus',
	title: 'Справочник Циклы обмена',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:684px;height:259px;',
			height: 259,width: 684,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'ДатаСоздания',
				},
				{
					text:'Наименование',
				},
				{
					text:'Предмет',
				},
				{
					text:'Организация',
				},
				{
					text:'ВнешняяОрганизация',
				},
				{
					text:'Идентификатор',
				},
				{
					text:'ДатаЗакрытия',
				},
				{
					text:'ДатаПоследнегоСообщения',
				},
				{
					text:'Тип',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				{
					text:'Разделитель4',
				},
				{
					text:'Действие9',
				},
			]
		},
	]
});