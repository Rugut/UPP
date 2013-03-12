Ext.define('Справочники.ОбработкиОбслуживанияТО.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Обработки обслуживания торгового оборудования',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:584px;height:259px;',
			height: 259,width: 584,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Вид торгового оборудования',
					width:'200',
				},
				{
					text:'Наименование',
					width:'200',
				},
				{
					text:'Имя файла',
					width:'150',
				},
				{
					text:'Версия API',
					width:'100',
				},
				{
					text:'Версия',
					width:'96',
				},
				{
					text:'Описание обработки обслуживания',
					width:'400',
				},
				{
					text:'Идентификатор',
					width:'250',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				{
					text:'Действие10',
				},
				{
					text:'Справка',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
			]
		},
	]
});