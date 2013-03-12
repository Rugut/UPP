Ext.define('Справочники.КлассификаторИспользованияРабочегоВремени.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:436px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Классификатор использования рабочего времени',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:420px;height:280px;',
			height: 280,width: 420,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Полное наименование',
					width:'220',
				},
				{
					text:'Рабочее время',
					width:'83',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:436px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие формы выбрать',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'',
				},
			]
		},
	]
});