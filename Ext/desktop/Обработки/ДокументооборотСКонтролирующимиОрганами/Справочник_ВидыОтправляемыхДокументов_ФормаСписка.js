Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ВидыОтправляемыхДокументов_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:802px;height:390px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'39',
				},
				{
					text:'Код',
					width:'48',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Тип получателя',
					width:'100',
				},
				{
					text:'Тип документа',
					width:'100',
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
					width:'160',
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
					text:'Найти в дереве',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие4',
				},
				{
					text:'Восстановить исходные реквизиты',
				},
				{
					text:'Переместить в группу',
				},
				{
					text:'Иерархический просмотр',
				},
				{
					text:'Изменить',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Новая группа',
				},
				'-',
				'-',
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОписаниеОтчета',
			text: '',
			style: 'position:absolute;left:8px;top:342px;width:786px;height:40px;',
		},
	]
});