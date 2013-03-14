Ext.define('Документы.Событие.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:680px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'События',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:664px;height:259px;',
			height: 259,width: 664,
			columns:
			[
				{
					text:'',
					width:'20',
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
					text:'Тип события',
					width:'100',
				},
				{
					text:'Вид события',
					width:'100',
				},
				{
					text:'Группа события',
					width:'120',
				},
				{
					text:'Контрагент',
					width:'180',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Напомнить о событии',
					width:'54',
				},
				{
					text:'Время напоминания',
					width:'132',
				},
				{
					text:'Важность',
					width:'80',
				},
				{
					text:'Состояние события',
					width:'100',
				},
				{
					text:'Территория',
					width:'120',
				},
				{
					text:'Помещение',
					width:'120',
				},
				{
					text:'Начало события',
					width:'80',
				},
				{
					text:'Вид объекта',
					width:'120',
				},
				{
					text:'Проект',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:680px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
			]
		},
	]
});