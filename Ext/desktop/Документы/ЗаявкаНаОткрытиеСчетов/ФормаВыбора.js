Ext.define('Документы.ЗаявкаНаОткрытиеСчетов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:720px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заявка на открытие счетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:704px;height:280px;',
			height: 280,width: 704,
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
					text:'Сотрудники',
					width:'100',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Обработано в банке',
					width:'100',
				},
				{
					text:'Комментарий',
					width:'220',
				},
				{
					text:'Банковский счет',
					width:'120',
				},
				{
					text:'Валюта',
					width:'80',
				},
				{
					text:'№ договора',
					width:'80',
				},
				{
					text:'Текст подтверждения',
					width:'220',
				},
				{
					text:'Вид вклада',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			items:
			[
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Лицевые счета сотрудников организации',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действия формы выбрать',
				},
			]
		},
	]
});