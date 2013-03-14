Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЦиклыОбмена_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'96',
				},
				{
					text:'Дата создания',
					width:'112',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Предмет',
					width:'104',
				},
				{
					text:'Организация',
					width:'104',
				},
				{
					text:'Внешняя организация',
					width:'104',
				},
				{
					text:'Идентификатор',
					width:'120',
				},
				{
					text:'Дата завершения',
					width:'104',
				},
				{
					text:'Дата последнего сообщения',
					width:'104',
				},
				{
					text:'Тип цикла обмена',
					width:'104',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});