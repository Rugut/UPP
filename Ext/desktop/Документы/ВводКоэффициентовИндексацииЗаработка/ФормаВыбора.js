Ext.define('Документы.ВводКоэффициентовИндексацииЗаработка.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:660px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документы Ввод коэффициентов индексации заработка',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:644px;height:259px;',
			height: 259,width: 644,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Месяц',
					width:'84',
				},
				{
					text:'Коэффициент',
					width:'80',
				},
				{
					text:'Сотрудники',
					width:'100',
				},
				{
					text:'Комментарий',
					width:'100',
				},
				{
					text:'Ответственный',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			items:
			[
				{
					text:'Действия формы выбрать',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
			]
		},
	]
});