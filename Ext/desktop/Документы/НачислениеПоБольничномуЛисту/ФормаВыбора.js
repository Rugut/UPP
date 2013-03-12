Ext.define('Документы.НачислениеПоБольничномуЛисту.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Начисления по больничным листам',
	
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
					text:'Серия листка нетрудоспособности',
					width:'84',
				},
				{
					text:'№ листка нетрудоспособности',
					width:'70',
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
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Дата начала',
					width:'84',
				},
				{
					text:'Дата окончания',
					width:'84',
				},
				{
					text:'Месяц начисления',
					width:'84',
				},
				{
					text:'Первичный больничный лист',
					width:'120',
				},
				{
					text:'Причина нетрудоспособности',
					width:'120',
				},
				{
					text:'% оплаты',
					width:'60',
				},
				{
					text:'Комментарий',
					width:'120',
				},
				{
					text:'Ответственный',
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
					text:'Действие7',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие14',
				},
				{
					text:'',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				'-',
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие12',
				},
				'-',
				{
					text:'Действие9',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие8',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие13',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
			]
		},
	]
});