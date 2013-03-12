Ext.define('Документы.СведенияОТрудовомСтажеИЗаработкеСЗВ4.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:750px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Пачки сведений о страховых взносах и стаже застрахованных лиц (СЗВ-4, СЗВ-6)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:734px;height:380px;',
			height: 380,width: 734,
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
					text:'Отчетный период',
					width:'99',
				},
				{
					text:'Тип сведений',
					width:'80',
				},
				{
					text:'Тип форм документов',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:750px;height:25px;',
			items:
			[
				'-',
				'-',
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие2',
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
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие11',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				'-',
				'-',
				'-',
				{
					text:'',
				},
			]
		},
	]
});