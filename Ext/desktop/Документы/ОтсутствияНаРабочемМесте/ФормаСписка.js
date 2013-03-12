Ext.define('Документы.ОтсутствияНаРабочемМесте.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:871px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отсутствия на рабочем месте',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:855px;height:380px;',
			height: 380,width: 855,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата регистрации',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Период отсутствия',
					width:'150',
				},
				{
					text:'Причина отсутствия',
					width:'120',
				},
				{
					text:'Зарегистрировал',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:871px;height:25px;',
			items:
			[
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие19',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие12',
				},
				{
					text:'',
				},
				{
					text:'Действие13',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие17',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие12',
				},
				'-',
				{
					text:'Действие20',
				},
				{
					text:'Действие18',
				},
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие9',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие14',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие15',
				},
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие16',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие21',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие11',
				},
			]
		},
	]
});