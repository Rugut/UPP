Ext.define('Документы.НачислениеЗарплатыРаботникамОрганизаций.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Начисления зарплаты сотрудникам организаций',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
			height: 380,width: 764,
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
					text:'Вид операции',
					width:'120',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Период начисления',
					width:'160',
				},
				{
					text:'Месяц',
					width:'100',
				},
				{
					text:'Период начисления',
					width:'120',
				},
				{
					text:'Подразделение организации',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие13',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				{
					text:'',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие14',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие6',
				},
			]
		},
	]
});